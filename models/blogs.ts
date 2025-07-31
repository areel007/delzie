import mongoose from "mongoose";
enum Category {
  frontend = "fe",
  backend = "be",
  mobile = "mobile",
}

const BlogSchema = new mongoose.Schema({
  title: String,
  markdown: String,
  image: String,
  category: {
    type: String,
    enum: Object.values(Category),
    default: Category.frontend,
  },
  author: String,
  clap: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
