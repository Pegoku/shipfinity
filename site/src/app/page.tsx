import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity</h1>
        <p className="mt-4 text-gray-300">
          A Hack Club YSWS where you ship a Gridfinity bin, and we'll send you
          it (or filament)!
        </p>
        <br />
        <Image
          src="/bin3.png"
          alt="bin3"
          className="border border-gray-700 rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="box-out">
        <h2 className="box-title">What is Gridfinity?</h2>
        <p className="box-in">
          Gridfinity is a modular, open-source grid storage system designed for
          workshops and other workspaces to help with organization. It uses a
          standardized grid pattern (42x42mm) and modular bins that can be
          customized to fit various tools, parts, or supplies. The system is
          highly flexible, allowing users to create tailored storage solutions
          that maximize efficiency and minimize clutter.
        </p>
      </div>
      <br />
      <div className="box-out">
        <h2 className="box-title">What are the requirements?</h2>
        <p className="box-in">
          1. Spend at least (TBD) hours designing the bins <br />
          2. Your submission must be unique. You may be asked to clarify why
          your bin is better/different if a similar 3D model already exists{" "}
          <br />
          3. Your submission must have a purpose <br />
          4. You must be 18 or under.
        </p>
      </div>

      <br />
      <div className="box-out">
        <h2 className="box-title">What will I get?</h2>
        <p className="box-in">
          1. You’ll receive a grant locked to filament vendors at $4/hour of
          your design time.
          <br />
          2. When the event ends, a week-long voting will determine the best
          bins.
          <br />
          3. The top 5 vote-getting participants will each receive an extra
          grant equal to (Total hours spent by all participants / 5).
          <br />
        </p>
      </div>
      <br />
      <div className="box-out">
        <h2 className="box-title">What have people already made?</h2>
        <div className="box-in">
          <p className="text-gray-300">
            There are lots of community-made bins and collections which can be
            found in pages like{" "}
            <a href="https://thangs.com/category/Gridfinity/Bins">Thangs</a> or{" "}
            <a href="https://www.printables.com/search/models?q=tag%3Agridfinity">
              Printables
            </a>
          </p>
          <p className="mt-4">A few remarkable examples are:</p>

          <ul className="list-disc list-inside mt-4 text-gray-300">
            <li>
              <a href="https://www.printables.com/model/301673-gridfinity-tool-holder-collection">
                Gridfinity tool holder collection
              </a>{" "}
              - A collection of tool holders for the Gridfinity system.
            </li>
            <li>
              <a href="https://www.printables.com/model/1200145-gridfinity-collection">
                Pegoku's Gridfinity collection
              </a>{" "}
              - A collection of Pegoku's (YSWS author) Gridfinity bins.
            </li>
            <li>
              <a href="https://www.printables.com/model/719729-gridfinity-complete-kitchen-collection-w-modular-e">
                Gridfinity Kitchen Collection
              </a>{" "}
              - A complete set of Kitchenware bins for Gridfinity of all sizes +
              expandable and modular pieces.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="box-out">
        <p className="box-title">How do I start?</p>
        <p className="box-in">
          Already familiar with CAD and Gridfinity? Simply open your preferred
          editor and start creating a new project! <br /> New to CAD?{" "}
          <a href="guide">Click here for a beginner's guide</a>
          {" "}to get started. Don't forget to join the{" "}
          <a href="https://hackclub.slack.com/archives/C08EEU7T4GM">
            #shipfinity
          </a>{" "}
          channel on Slack!
        </p>
      </div>
    </div>
  );
}
