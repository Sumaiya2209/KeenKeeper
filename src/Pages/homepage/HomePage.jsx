import Banner from "./Banner";
import DetailsCard from "./detailsCard";
import Friends from "./Friends";

const data = fetch('./data.json').then (res => res.json());

const HomePage = () => {
  return (
      <div>
        <Banner />
        <DetailsCard />
        <Friends key={data.id} data={data} />
      </div>
  );
};

export default HomePage;