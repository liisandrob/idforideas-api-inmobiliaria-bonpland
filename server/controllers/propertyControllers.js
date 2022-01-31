const Property = require('../models/property');

const propertyController = {};

propertyController.get = async function (req, res, next) {

  const { code, highlight, rooms, country, city, minSurface, maxSurface, minPrice, maxPrice, contract} = req.query;

  let where = {};

  if(code) where.code = { $regex : code, $options: 'i' };
  if(highlight) where.highlight = highlight;
  if(rooms) where.rooms = rooms;
  if(country) where.country = { $regex : country, $options: 'i' };
  if(city) where.city = { $regex : city, $options: 'i' };
  if(contract) where.contract = { $regex : contract, $options: 'i' };

  if(minSurface && maxSurface) where.surface = { $gte: minSurface, $lte: maxSurface }
  else if (minSurface) where.surface = { $gte: minSurface }
  else if (maxSurface) where.surface = { $gte: maxSurface }

  if(minPrice && maxPrice) where.price = { $gte: minPrice, $lte: maxPrice }
  else if (minPrice) where.price = { $gte: minPrice }
  else if (maxPrice) where.price = { $gte: maxPrice }

  try {
    const propertyList = await Property.find().where(where);
    res.status(200).send({ data: propertyList });
  } catch (error) {
    next(error);
  }
};

propertyController.registerProperty = async function (req, res, next) {

  const { code, images, highlight, rooms, country, city, surface, price, contract, status } = req.body;
  
  try {
    if( !code || !images || !rooms || !country || !city || !surface || !price || !contract || !status ) {
      throw new Error('Error en parámetros enviados');
    }

    const consulta = await Property.find({ code: { $regex : code, $options: 'i' } } );
    if (consulta.length > 0) throw new Error('Código de referencia ya utilizado');

    const prop = new Property({ code, images, highlight, rooms, country, city, surface, price, contract, status });

    await prop.save();
    res.status(200).send({ message: 'Propiedad creada exitosamente', data: prop });
  } catch (error) {
    next(error)
  }
};

propertyController.editProperty = async function (req, res, next) {
  const { id } = req.params;
  const data = req.body;

  if (!id || !data) throw new Error('Error en parámetros enviados');

  try {
    let c = await Property.findById(id);
    if (!c) throw new Error('Id inexistente');

    await Property.findOneAndUpdate(
      { _id: id },
      data,
      { upsert: true, setDefaultsOnInsert: true}
    )

    res.status(200).send({ message: 'Propiedad editada exitosamente' });
  } catch (error) {
    next(error);
  }
};

propertyController.deleteProperty = async function (req, res, next) {
  
  const { id } = req.params;
  try {
    if (!id) throw new Error('Código de referencia ya utilizado');

    const consulta = await Property.findById(id);
    if (!consulta) throw new Error('Id inexistente');

    const query = await Property.deleteOne({ _id : id });
    if(query.deletedCount === 1) return res.status(200).send({ message: 'Propiedad eliminada exitosamente' });
  } catch (error) {
    next(error)
  }
};

module.exports = propertyController;