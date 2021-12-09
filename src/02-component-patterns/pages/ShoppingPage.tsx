import { ProductCard } from "../components";


export const ShoppingPage = () => {
  const product = {
    id:'1',
    title:'Coffee Mug',
    img:'./coffee-mug.png'
  }
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
      <ProductCard product={product}>
        <ProductCard.Image/>
        <ProductCard.Title title={''}/>
        <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
