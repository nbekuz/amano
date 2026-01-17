import { documents } from "../data/propertyDetailData";
import docIcon from "../assets/img/doc.svg";

const DocumentItem = ({ doc }) => {
  return (

    <div className="border border-white/10 px-4 py-3 rounded-xl bg-white/5 flex items-center justify-between">
      <div className="flex items-center gap-3 ">
        <div className="w-10 h-10 bg-white-10/6 border-white/10 border rounded-lg flex items-center justify-center">
          <img src={docIcon} alt="doc" className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{doc.name}</span>
            {doc.verified && (
              <span className="px-1 py-0.5 bg-white-10/6 text-white-10 text-[8px] rounded-lg">
                Verified
              </span>
            )}
          </div>
          <div className="text-gray-400 text-sm">
            {doc.type} - Uploaded {doc.date}
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/30 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download
      </button>
    </div>
  );
};

const DocumentSection = ({ title, docs }) => {
  return (
    <div >
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {docs.map((doc, index) => (
          <DocumentItem key={index} doc={doc} />
        ))}
      </div>
    </div>
  );
};

const PropertyDocumentsTab = () => {
  return (
    <div className="space-y-6">
      <div className="p-5 rounded-xl bg-white-10/6 border-white/10 border">

        <DocumentSection
          title="Investment Documents"
          docs={documents.investment}
        />
      </div>
      <div className="mt-6 p-5 rounded-xl bg-white-10/6 border-white/10 border relative overflow-hidden">
        <div className="absolute top-1/2 right-40  rotate-45   -translate-y-1/2   bg-primary w-15  propert-blur2   flex z-1"></div>
        <DocumentSection title="Property Documents" docs={documents.property} />
      </div>
      <div className="mt-6 p-5 rounded-xl bg-white-10/6 border-white/10 border relative overflow-hidden">
        <div className="absolute top-1/2 left-40 rotate-45  -translate-y-1/2  bg-primary w-40   propert-blur flex z-0">

        </div>
        <DocumentSection title="Legal & Compliance" docs={documents.legal} />
        <div className="mt-6 bg-white-10/6 p-5 rounded-xl border-white/10 border">

          <h3 className="text-xl font-semibold text-white mb-4">
            Smart Contract Details
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-sm mb-1">Contract Address</div>
              <div className="text-white font-mono">0x742d...4f2a</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-white/70 text-sm mb-1">Network</div>
              <div className="text-white">Ethereum</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyDocumentsTab;
