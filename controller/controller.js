
let wishes = [
  {
    id: 1,
    titre: "test",
    description: "description",
  },
  {
    id: 2,
    titre: "hello world",
    description: "description of hello world",
  },
];

export const getAllWishes = (req, res) => {
  res.json(wishes);
};


export const getWishById = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const wish = wishes.find((wish) => wish.id === id);
  if (!wish) {
    return res.status(404).json({ message: "Wish not found" });
  }
  res.json(wish);
};


export const addWish = (req, res) => {
  const newWish = { id: wishes.length + 1, ...req.body };
  wishes.push(newWish);
  res.status(201).json(newWish);
};


export const updateWish = (req, res) => {
  const id = parseInt(req.params.id);
  const index = wishes.findIndex((wish) => wish.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Wish not found" });
  }
  wishes[index] = { ...wishes[index], ...req.body };
  res.status(200).json(wishes[index]);
};


export const deleteWish = (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = wishes.length;
  wishes = wishes.filter((wish) => wish.id !== id);
  if (wishes.length === initialLength) {
    return res.status(404).json({ message: "Wish not found" });
  }
  res.status(200).json({ message: "Wish deleted successfully" });
};
