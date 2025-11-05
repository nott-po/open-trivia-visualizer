import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

function DifficultyChart({data}) {
    if(!data || data.length === 0) return null;

    return(
        <div className="chart-container">
            <h2>Questions by Difficulty</h2>
            <ResponsiveContainer width="100%" height={400}>

                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="count"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>

            </ResponsiveContainer>
        </div>
    )
}

export default DifficultyChart;