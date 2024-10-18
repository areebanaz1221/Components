import Card, {Card2} from "../pages/card";

function Home() {
  return (
    <div>
      <h1 className="text-orange-500">
        Hello World!
      </h1>


{/* child component */}
<Card />
<Card2 />
    </div>
  );
}

export default Home;