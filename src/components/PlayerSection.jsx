const PlayerSection = ({ player, betAmount, onBet }) => (
  <div className="w-72 bg-slate-800 p-6 rounded-lg flex flex-col items-center">
    <div className="bg-slate-700 text-white text-center py-2 mb-4 rounded w-full">
      PLAYER 0{player}
    </div>
    <div className="bg-slate-700 text-white text-center py-2 mb-4 rounded w-full">
      {betAmount.toFixed(9)}
    </div>
    <button
      onClick={() => onBet(player)}
      className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
    >
      BET
    </button>
  </div>
);

export default PlayerSection;
