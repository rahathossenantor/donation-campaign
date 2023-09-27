import { PieChart, Pie, Cell } from "recharts";
import { getSavedData } from "../../utilities/localStorage";

const Statistics = () => {
    const donatedCards = getSavedData();

    const data = [
        { name: "Total Donations", value: 12 },
        { name: "Your Donations", value: donatedCards.length }
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="py-16">
                <div className="flex justify-center">
                    <PieChart width={300} height={300} className="inline-block">
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className="flex gap-5 justify-center py-5">
                    <p className="flex gap-2 items-center">Your Donations <span className="h-4 w-20 bg-[#00C49F]"></span></p>
                    <p className="flex gap-2 items-center">Total Donations <span className="h-4 w-20 bg-[#FF444A]"></span></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
