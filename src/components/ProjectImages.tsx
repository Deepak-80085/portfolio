
// Project image placeholder components

export const MewMawImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-portfolio-primary/10 overflow-hidden">
    <div className="relative w-4/5 h-4/5">
      {/* Thought bubbles and story elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <span className="text-2xl">🎨</span>
      </div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
        <span className="text-2xl">📚</span>
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
        <span className="text-3xl">✨</span>
      </div>
      
      {/* Central AI element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 bg-portfolio-primary rounded-full flex items-center justify-center">
          <span className="text-white text-4xl">AI</span>
        </div>
      </div>
      
      {/* Text connections */}
      <div className="absolute top-1/2 left-1/5 h-1 w-20 bg-portfolio-secondary transform rotate-45"></div>
      <div className="absolute top-1/2 right-1/5 h-1 w-20 bg-portfolio-secondary transform -rotate-45"></div>
    </div>
  </div>
);

export const ExpenseEaseImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-portfolio-primary/10 overflow-hidden">
    <div className="w-64 h-96 bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-800 relative">
      {/* App header */}
      <div className="h-14 bg-portfolio-primary flex items-center justify-center">
        <h3 className="text-white font-bold">ExpenseEase</h3>
      </div>
      
      {/* App content */}
      <div className="p-4">
        <div className="w-full h-32 bg-portfolio-accent4/30 rounded-lg mb-4 flex items-center justify-center">
          {/* Pie chart */}
          <div className="w-20 h-20 rounded-full border-8 border-portfolio-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-portfolio-primary"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolio-tertiary"></div>
          </div>
        </div>
        
        {/* Expense items */}
        <div className="space-y-2">
          <div className="h-8 bg-gray-100 rounded flex items-center px-2">
            <div className="w-8 h-8 rounded-full bg-portfolio-accent1 flex items-center justify-center mr-2">🍔</div>
            <div className="flex-1">Food</div>
            <div className="font-bold">$25</div>
          </div>
          <div className="h-8 bg-gray-100 rounded flex items-center px-2">
            <div className="w-8 h-8 rounded-full bg-portfolio-accent2 flex items-center justify-center mr-2">🚗</div>
            <div className="flex-1">Transport</div>
            <div className="font-bold">$15</div>
          </div>
          <div className="h-8 bg-gray-100 rounded flex items-center px-2">
            <div className="w-8 h-8 rounded-full bg-portfolio-accent3 flex items-center justify-center mr-2">🏠</div>
            <div className="flex-1">Rent</div>
            <div className="font-bold">$500</div>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gray-100 flex justify-around items-center">
        <div className="text-portfolio-primary">📊</div>
        <div className="text-portfolio-primary">➕</div>
        <div className="text-portfolio-primary">👥</div>
      </div>
    </div>
  </div>
);

export const KannadaOCRImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-portfolio-primary/10 overflow-hidden">
    <div className="relative w-4/5 h-4/5 bg-white rounded-lg shadow-lg p-4">
      {/* Document with Kannada text */}
      <div className="absolute top-10 left-10 w-40 h-60 bg-gray-100 rounded border border-gray-300 flex items-center justify-center overflow-hidden">
        <div className="p-2">
          <div className="h-3 w-32 bg-gray-400 rounded mb-2"></div>
          <div className="h-3 w-28 bg-gray-400 rounded mb-2"></div>
          <div className="h-3 w-30 bg-gray-400 rounded mb-2"></div>
          <div className="h-3 w-24 bg-gray-400 rounded mb-2"></div>
          <div className="h-3 w-28 bg-gray-400 rounded"></div>
        </div>
      </div>
      
      {/* OCR processing visualization */}
      <div className="absolute top-20 right-20">
        <div className="w-40 h-40 border-4 border-dashed border-portfolio-primary rounded-lg relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="h-1 w-30 bg-portfolio-primary mb-2"></div>
            <div className="h-1 w-20 bg-portfolio-primary mb-2"></div>
            <div className="h-1 w-25 bg-portfolio-primary"></div>
          </div>
        </div>
      </div>
      
      {/* Detection lines */}
      <div className="absolute top-30 left-1/2 h-1 w-30 bg-portfolio-secondary transform -rotate-45"></div>
      <div className="absolute top-40 left-1/2 h-1 w-20 bg-portfolio-secondary transform -rotate-45"></div>
      
      {/* Result text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-4/5 h-10 bg-portfolio-accent1 rounded-lg flex items-center justify-center">
        <div className="font-bold text-portfolio-primary">Kannada Text Detected</div>
      </div>
    </div>
  </div>
);

export const SportshuntImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-portfolio-primary/10 overflow-hidden">
    <div className="w-5/6 h-5/6 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Website header */}
      <div className="h-16 bg-portfolio-dark flex items-center justify-between px-6">
        <div className="text-white font-bold text-xl">Sportshunt</div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Hero section */}
      <div className="h-32 bg-portfolio-primary/20 flex items-center justify-center">
        <div className="text-portfolio-dark font-bold text-2xl">Premium Sports Gear</div>
      </div>
      
      {/* Product grid */}
      <div className="p-4 grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-100 rounded-lg p-2 flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-lg mb-2"></div>
            <div className="h-2 w-16 bg-gray-400 rounded mb-1"></div>
            <div className="h-2 w-10 bg-portfolio-primary rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const JarvisImage = () => (
  <div className="w-full h-full flex items-center justify-center bg-portfolio-primary/10 overflow-hidden">
    <div className="relative w-5/6 h-5/6">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-portfolio-dark rounded-full flex items-center justify-center">
        <div className="w-30 h-30 bg-portfolio-primary rounded-full animate-pulse flex items-center justify-center">
          <span className="text-white text-4xl">AI</span>
        </div>
      </div>
      
      {/* Voice command visualizations */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="px-4 py-2 bg-white rounded-full shadow-lg">
          <span className="text-portfolio-primary">🎵 Play music</span>
        </div>
      </div>
      
      <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
        <div className="px-4 py-2 bg-white rounded-full shadow-lg">
          <span className="text-portfolio-primary">🔍 Search web</span>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2">
        <div className="px-4 py-2 bg-white rounded-full shadow-lg">
          <span className="text-portfolio-primary">📅 Set reminder</span>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="px-4 py-2 bg-white rounded-full shadow-lg">
          <span className="text-portfolio-primary">📧 Send email</span>
        </div>
      </div>
      
      {/* Connection lines */}
      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/6 border-t-2 border-l-2 border-portfolio-secondary rounded-tl-full"></div>
      <div className="absolute top-1/3 right-1/3 w-1/3 h-1/6 border-t-2 border-r-2 border-portfolio-secondary rounded-tr-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1/3 h-1/6 border-b-2 border-l-2 border-portfolio-secondary rounded-bl-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/6 border-b-2 border-r-2 border-portfolio-secondary rounded-br-full"></div>
    </div>
  </div>
);
