import Item from "@/components/item";
import Layout from "@/components/layout";
import { NextPage } from "next";

const Bought : NextPage = () => {
    return(
    <Layout title="Verkaufen" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        {[1,1,1,1,1,1].map((_, i) => (
          <Item key={i}
                id={i}
                title="Hair shop"
                price={90}
                comments={2}
                hearts={1}
          />
        ))}
      </div>
    </Layout>
);
}

export default Bought