import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          console.log(data.drinks);
          const newCocktail = {
            name: data.drinks[0].strDrink,
            image: data.drinks[0].strDrinkThumb,
            info: data.drinks[0].strAlcoholic,
            category: data.drinks[0].strCategory,
            glass: data.drinks[0].strGlass,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass } = cocktail;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
