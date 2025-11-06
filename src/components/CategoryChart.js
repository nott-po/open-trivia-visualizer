import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { decodeHtml } from '../utils';

function CategoryChart({data}) {
    if(!data || data.length === 0) return null;

    const decodedData = data.map(item => ({
        ...item,
        name: decodeHtml(item.name)
    }));

    return(
        <div className={"chart-container"}>
            <h2>Questions by Category</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={decodedData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={150}
                        interval={0}
                        tick={{ fill: '#4a5568', fontSize: 12 }}
                    />
                    <YAxis tick={{ fill: '#4a5568' }} />
                    <Tooltip
                        contentStyle={{
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px'
                        }}
                    />
                    <Legend />
                    <Bar dataKey="count" fill="#7ea87a" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CategoryChart;