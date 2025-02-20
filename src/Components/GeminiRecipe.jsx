// GeminiRecipe.js
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function GeminiRecipe(props) {
  return (
    <section className="flex justify-center items-center min-h-screen mt-8">
      <div className="prose max-w-2xl">
        <h2>Chef Gemini Recommends:</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {props.recipe}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export default GeminiRecipe;
