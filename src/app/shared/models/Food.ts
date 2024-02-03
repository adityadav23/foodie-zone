export default interface IFood {
  id: string;
  name: string;
  price: number;
  tags?: string[];
  favorite: boolean;
  stars: number;
  imageUrl: string;
  origins: string[];
  cookTime: string;
}