import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CategoryChart({data}) {
    if(!data || data.length === 0) return null;

    return(
        <div className={"chart-container"}>
            <h2>Questions by Category</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={150}
                        interval={0}
                    />
                    <YAxis />

                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CategoryChart;