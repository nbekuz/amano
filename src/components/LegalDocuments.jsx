const LegalDocuments = ({ documents }) => {
  return (
    <div className="dashboard-card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Legal Documents</h3>
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center py-2 ${
              index < documents.length - 1 ? 'border-b border-gray-800' : ''
            }`}
          >
            <span className="text-white text-sm">{doc.name}</span>
            <button className="legal-document-button">{doc.status}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalDocuments;

