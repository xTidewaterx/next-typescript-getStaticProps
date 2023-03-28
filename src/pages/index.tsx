import { GetStaticProps } from "next";
import Link from "next/link";

interface presidentType  {
   //object key-value pair in the form of any
        [key: string]: any;
}



function PresidentList({ presidents }: presidentType) {
  console.log(presidents);
  return (
    <div className="list__container p-5">
      <h1>Liste over Amerikanske presidenter 1817-1881</h1>
      <div className="list__childContainer pt-5 align-self-lg-center">
        {presidents.map((president: any) => (
          <div className="list__presidentContainer" key={president.id}>
            <Link
              style={{ color: "black" }}
              href={`presidents/${president.id}`}
            >
              <li className=" pb-2 list__presidentName">{president.name}</li>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PresidentList;

export const getStaticProps: GetStaticProps = async (context) => {
  const response2 = await fetch(
    "https://api.sampleapis.com/presidents/presidents"
  );

  const data = await response2.json();

  return {
    props: {
      presidents: data.slice(4, 19),
    },
  };
};

