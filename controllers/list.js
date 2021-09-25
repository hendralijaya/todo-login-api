const List = require("../models/List");

// untuk menampilkan semua list
module.exports.getAllLists = async (req, res) => {
  const allList = await List.find();
  res.status(200).json(allList);
};

module.exports.postList = async (req, res) => {
  const { note, desc } = req.body;
  try {
    const list = await List.create({ note, desc });
    res.status(201).json(list);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports.putList = async (req, res) => {
  const list = await List.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        note: req.body.note,
        desc: req.body.desc,
      },
    },
    { new: true }
  );
  res.status(200).json(list);
};

module.exports.deleteList = async (req, res) => {
  await List.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "note berhasil dihapus" });
};

module.exports.getList = async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    res.status(404).json({ msg: "Not found" });
  }
};
