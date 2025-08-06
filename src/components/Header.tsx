import { HeaderProps } from '@/types/todo'

export default function Header({ totalCount, completedCount }: HeaderProps) {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Todo App
      </h1>
      <p className="text-gray-600 mb-4">
        Stay organized and get things done
      </p>
      
      {totalCount > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 inline-block">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">
                Total: <span className="font-semibold text-gray-800">{totalCount}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">
                Completed: <span className="font-semibold text-gray-800">{completedCount}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">
                Remaining: <span className="font-semibold text-gray-800">{totalCount - completedCount}</span>
              </span>
            </div>
          </div>
          
          {totalCount > 0 && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((completedCount / totalCount) * 100)}% complete
              </p>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
