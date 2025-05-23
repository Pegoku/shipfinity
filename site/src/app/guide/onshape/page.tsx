import Image from "next/image";

export default function OnShapeGuide() {
  return (
    <div className="p-10 bg-gray-800 text-gray-100 min-h-screen">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-400">Shipfinity Guide</h1>
      </div>
      <div className="box-out">
        <p className="box-title">0. Install Wakatime OnShape</p>
        <p className="box-in">
          Install the{" "}
          <a href="https://github.com/JeffreyWangDev/onshape-wakatime">
            Wakatime OnShape
          </a>
          browser extension. While you're at it, star the repo.
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">1. Create base</p>
        <Image
          src="/onshape/img_0.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">Create a new sketch and 3x 42mm squares</p>
      </div>

      <div className="box-out">
        <p className="box-title">2. Add constraints to base</p>
        <Image
          src="/onshape/img_1.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Add constraints to the squares to make them 42mm x 42mm and 5mm apart.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">3. Extrude the base</p>
        <Image
          src="/onshape/img_2.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">Extrude the base to 3.5mm.</p>
      </div>

      <div className="box-out">
        <p className="box-title">4. Main bin</p>
        <Image
          src="/onshape/img_3.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">Create the main body of the bin</p>
      </div>

      <div className="box-out">
        <p className="box-title">5. Fillet the corners</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_4.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/onshape/img_5.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Add a fillet to the corners of the bin. It should be 2mm
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">6. Add bin lip</p>
        <Image
          src="/onshape/img_7.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Create a sketch on the top face of the bin and draw a 40mm square with
          2mm margin.
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">7. Hollow the bin</p>
        <Image
          src="/onshape/img_8.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Remove 25mm of the bin. This will create a hollow bin.
        </p>
      </div>
      <div className="box-out">
        <p className="box-title">8. Extrude the base</p>
        <Image
          src="/onshape/img_9.png"
          alt="FreeCAD"
          width={1024}
          height={768}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">Extrude 2mm of the base.</p>
      </div>

      <div className="box-out">
        <p className="box-title">9. Chamfer the base</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_10.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
          <Image
            src="/onshape/img_11.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain"
          />
        </div>
        <p className="box-in">
          Create a sketch on the base and chamfer it 2mm.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">10. Add the label tab</p>
        <div className="flex flex-wrap gap-4 my-4">
          <Image
            src="/onshape/img_15.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain max-w-full h-auto" // changed
          />
          <Image
            src="/onshape/img_16.png"
            alt="FreeCAD"
            width={508}
            height={768}
            className="border border-gray-700 rounded-lg object-contain max-w-full h-auto" // changed
          />
        </div>
        <p className="box-in">
          Position the label tab 3.5mm below the top edge and make it 2mm thick.
        </p>
      </div>

      <div className="box-out">
        <p className="box-title">11. Split the bin</p>
        <Image
          src="/onshape/img_18.png"
          alt="FreeCAD"
          width={1024}
          height={400}
          className="border border-gray-700 rounded-lg object-contain"
        />
        <p className="box-in">
          Add 1mm thick walls to the bin and split it into as many compartments
          you want.
        </p>
      </div>
    </div>
  );
}
