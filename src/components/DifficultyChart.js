import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = ['#7ea87a', '#f4a261', '#e76f51'];

const DIFFICULTY_COLORS = {
    'Easy': '#7ea87a',
    'Medium': '#f4a261',
    'Hard': '#e76f51'
};

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
                            <Cell
                                key={`cell-${index}`}
                                fill={DIFFICULTY_COLORS[entry.name] || COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px'
                        }}
                    />
                    <Legend />
                </PieChart>

            </ResponsiveContainer>
        </div>
    );
}

export default DifficultyChart;