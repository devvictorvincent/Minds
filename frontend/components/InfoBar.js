export default function InfoBar({ views, date, likes }) {
    return (
      <div 
      className="flex items-center space-x-4 text-gray-700 text-sm bg-gray-100 p-2 rounded-md"
      style={{flexWrap: 'wrap', fontSize:'80%'}}>
        {/* Views */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12m-3 0a3 3 0 11-6 0 3 3 0 016 0zm6-2.6c.342.624.552 1.315.552 2.1 0 1.657-2.686 3-6 3s-6-1.343-6-3c0-.785.21-1.476.552-2.1m9.448 0A9.95 9.95 0 0012 4c-3.314 0-6 1.343-6 3 0 .785.21 1.476.552 2.1" />
          </svg>
          <span>{views} Views</span>
        </div>
  
        {/* Date */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 4h10M5 11h14m-6 4v6m-4-6v6" />
          </svg>
          <span>{date}</span>
        </div>
  
        {/* Likes */}
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <span>{likes} Likes</span>
        </div>
      </div>
    );
  }
  