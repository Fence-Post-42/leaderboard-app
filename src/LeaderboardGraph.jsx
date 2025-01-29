import React, { useState } from "react";
import { Button } from "./components/ui/button.jsx";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card.jsx";
import { Crown, Medal, Trophy } from "lucide-react";

const LeaderboardGraph = () => {
  const [timeframe, setTimeframe] = useState("ThisWeek");

  // Agent data (replace with live CRM data later)
  const data = [
    { name: "Julie Ablan-Woodrow", deals: 5, volume: 959000 },
    { name: "Joni Bates", deals: 2, volume: 567000 },
    { name: "Allison Elliott", deals: 2, volume: 385000 },
    { name: "Dave Jackson", deals: 1, volume: 265000 },
    { name: "Zachary Ludemann Perini", deals: 1, volume: 35000 },
    { name: "Michael Ablan", deals: 0, volume: 0 },
  ];

  // Sort by sales volume for ranking
  const sortedData = [...data].sort((a, b) => b.volume - a.volume);

  // Function to assign rank icons
  const getRankIcon = (index) => {
    switch (index) {
      case 0:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 1:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 inline-flex items-center justify-center">{index + 1}</span>;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="w-full max-w-3xl bg-white shadow-xl rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-900">
            🏆 Marble Key Team Leaders
          </CardTitle>
          <div className="flex justify-center gap-4 mt-6">
            {["ThisWeek", "ThisMonth", "YTD"].map((period) => (
              <Button
                key={period}
                className={`px-6 py-2 font-medium rounded-lg transition ${
                  timeframe === period ? "bg-blue-600 text-white shadow-lg" : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
                onClick={() => setTimeframe(period)}
              >
                {period.replace("This", "")}
              </Button>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedData.map((agent, index) => (
              <div
                key={agent.name}
                className={`flex items-center p-5 rounded-xl transition ${
                  index === 0 ? "bg-yellow-100 shadow-md" :
                  index === 1 ? "bg-gray-100 shadow-md" :
                  index === 2 ? "bg-orange-100 shadow-md" : "bg-white"
                } border border-gray-300`}
              >
                <div className="flex-shrink-0 mr-5">{getRankIcon(index)}</div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-900">{agent.name}</h3>
                  <div className="flex gap-6 mt-2 text-sm text-gray-600">
                    <span>Deals: {agent.deals}</span>
                    <span>Volume: ${agent.volume.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardGraph;
