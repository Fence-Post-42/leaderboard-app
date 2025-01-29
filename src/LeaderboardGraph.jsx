import React, { useState } from "react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Crown, Medal, Trophy } from "lucide-react";

const LeaderboardGraph = () => {
  const [timeframe, setTimeframe] = useState("ThisWeek");

  // Sample static data (to be replaced with live CRM data)
  const data = [
    { name: "Julie Ablan-Woodrow", deals: 5, volume: 959000 },
    { name: "Joni Bates", deals: 2, volume: 567000 },
    { name: "Allison Elliott", deals: 2, volume: 385000 },
    { name: "Dave Jackson", deals: 1, volume: 265000 },
    { name: "Zachary Ludemann Perini", deals: 1, volume: 35000 },
    { name: "Michael Ablan", deals: 0, volume: 0 },
  ];

  // Sort by volume for ranking
  const sortedData = [...data].sort((a, b) => b.volume - a.volume);

  return (
    <div className="p-6 bg-gray-900 rounded-2xl shadow-lg text-white max-w-3xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Agent Performance Leaderboard
      </h2>

      {/* Timeframe Buttons */}
      <div className="flex justify-center mb-4 space-x-2">
        {["ThisWeek", "ThisMonth", "YTD"].map((tab) => (
          <Button
            key={tab}
            className={timeframe === tab ? "button-active" : "button-inactive"}
            onClick={() => setTimeframe(tab)}
          >
            {tab.replace("This", "")}
          </Button>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {sortedData.map((agent, index) => (
          <Card key={agent.name} className="bg-gray-800 text-white">
            <CardContent className="flex items-center justify-between p-4">
              {/* Ranking Icons */}
              <div className="flex items-center space-x-3">
                {index === 0 && <Crown className="text-yellow-400" size={24} />}
                {index === 1 && <Trophy className="text-gray-400" size={24} />}
                {index === 2 && <Medal className="text-orange-500" size={24} />}
                <span className="text-lg font-medium">{agent.name}</span>
              </div>

              {/* Deal & Volume Stats */}
              <div className="text-right">
                <p className="text-sm text-gray-400">{agent.deals} Deals</p>
                <p className="text-lg font-bold">${agent.volume.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardGraph;
