import React, { useState, useEffect } from 'react';
import { FaUsers, FaShoppingCart, FaBox, FaChartLine, FaPlus, FaSearch, FaFilter } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const { logout } = useAuth();
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalProducts: 0,
        totalUsers: 0,
        totalRevenue: 0
    });

    const [recentOrders, setRecentOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // TODO: Replace with actual API calls
            setStats({
                totalOrders: 150,
                totalProducts: 45,
                totalUsers: 1200,
                totalRevenue: 25000
            });

            setRecentOrders([
                { id: 1, customer: 'John Doe', amount: 150, status: 'Completed', date: '2024-03-20' },
                { id: 2, customer: 'Jane Smith', amount: 200, status: 'Pending', date: '2024-03-19' },
                { id: 3, customer: 'Mike Johnson', amount: 175, status: 'Processing', date: '2024-03-18' },
            ]);

            setProducts([
                { id: 1, name: 'Product 1', price: 100, stock: 50 },
                { id: 2, name: 'Product 2', price: 200, stock: 30 },
                { id: 3, name: 'Product 3', price: 150, stock: 75 },
            ]);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
    };

    const filteredOrders = recentOrders.filter(order => {
        const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || order.status.toLowerCase() === statusFilter.toLowerCase();
        const matchesDateRange = (!dateRange.start || order.date >= dateRange.start) &&
                               (!dateRange.end || order.date <= dateRange.end);
        return matchesSearch && matchesStatus && matchesDateRange;
    });

    if (loading) {
        return <div className="admin-loading">Loading dashboard...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>

            <div className="admin-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
                    onClick={() => setActiveTab('orders')}
                >
                    Orders
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
                    onClick={() => setActiveTab('products')}
                >
                    Products
                </button>
            </div>

            {activeTab === 'overview' && (
                <>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <FaShoppingCart className="stat-icon" />
                            <div className="stat-info">
                                <h3>Total Orders</h3>
                                <p>{stats.totalOrders}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <FaBox className="stat-icon" />
                            <div className="stat-info">
                                <h3>Total Products</h3>
                                <p>{stats.totalProducts}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <FaUsers className="stat-icon" />
                            <div className="stat-info">
                                <h3>Total Users</h3>
                                <p>{stats.totalUsers}</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <FaChartLine className="stat-icon" />
                            <div className="stat-info">
                                <h3>Total Revenue</h3>
                                <p>₵{stats.totalRevenue.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'orders' && (
                <div className="orders-section">
                    <div className="filters">
                        <div className="search-box">
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="Search orders..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="date-range">
                            <input
                                type="date"
                                value={dateRange.start}
                                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                            />
                            <input
                                type="date"
                                value={dateRange.end}
                                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                            />
                        </div>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                        </select>
                    </div>

                    <div className="recent-orders">
                        <h2>Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.map(order => (
                                    <tr key={order.id}>
                                        <td>#{order.id}</td>
                                        <td>{order.customer}</td>
                                        <td>₵{order.amount}</td>
                                        <td>
                                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td>{order.date}</td>
                                        <td>
                                            <button className="view-btn">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'products' && (
                <div className="products-section">
                    <div className="products-header">
                        <h2>Products</h2>
                        <button className="add-product-btn">
                            <FaPlus /> Add Product
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>#{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>₵{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard; 