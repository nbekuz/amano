import { documents } from "../data/propertyDetailData";

const DocumentItem = ({ doc }) => {
  return (
    <div className="dashboard-card p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C10.9836 2 11.3651 2.15804 11.6464 2.43934L15.5607 6.35355C15.842 6.63486 16 7.01639 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M10 2V7H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{doc.name}</span>
            {doc.verified && (
              <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">
                Verified
              </span>
            )}
          </div>
          <div className="text-gray-400 text-sm">
            {doc.type} - Uploaded {doc.date}
          </div>
        </div>
      </div>
      <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/30 transition-colors">
        Download
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 12V2M8 12L4 8M8 12L12 8M2 14H14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

const DocumentSection = ({ title, docs }) => {
  return (
    <div>
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
      <DocumentSection
        title="Investment Documents"
        docs={documents.investment}
      />
      <div className="mt-6">
        <DocumentSection title="Property Documents" docs={documents.property} />
      </div>
      <div className="mt-6">
        <DocumentSection
          title="Legal & Compliance"
          docs={documents.legal}
        />
      </div>
      <div className="mt-6">
        <div className="dashboard-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Smart Contract Details
          </h3>
          <div className="space-y-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">Contract Address</div>
              <div className="text-white font-mono">0x742d...4f2a</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Network</div>
              <div className="text-white">Ethereum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDocumentsTab;
