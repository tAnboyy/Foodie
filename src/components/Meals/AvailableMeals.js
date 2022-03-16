import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Idli",
    description: "Plain but it's alright",
    price: 40
  },
  {
    id: "m2",
    name: "Dosa",
    description: "Idli but flat",
    price: 55
  },
  {
    id: "m3",
    name: "Pulav",
    description: "Vegie mixed rice",
    price: 60
  },
  {
    id: "m4",
    name: "Veg biryani",
    description: "What's that..",
    price: 80
  }
];

const MealList = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
