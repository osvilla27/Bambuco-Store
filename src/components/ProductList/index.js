import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { isLoding, productList, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderedProducts = productList.map((product) => {
    return(
      <div key={product.id}>
        <p>{product.name}</p>
      </div>
    )
  })

  if (isLoding) return <div> Cargando... </div>;

  if (error) return <div> Error... </div>;

  return <div> {renderedProducts} </div>;
};

export default ProductsList;
