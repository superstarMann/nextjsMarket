import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";


const Write: NextPage = () => {
    return(
      <Layout canGoBack title = "Post" >
        <form className="p-4 space-y-4">
          <TextArea required placeholder="Ask a question!"/>
          <Button text="Submit"/>
        </form>
      </Layout>
);
};

export default Write;