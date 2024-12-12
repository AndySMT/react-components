import champs from "../data/LoL_Data";
import Card from "./Card";
function Main() {
  return (
    <main className=" container">
      <Card champs={champs} />
    </main>
  );
}
export default Main;
