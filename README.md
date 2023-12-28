# Sports Social

A full-stack social media platform built for sports enthusiasts, athletes, and teams to connect, share, and engage with the sports community.

## Features

- **Authentication**: JWT-based authentication with Google OAuth integration
- **User Profiles**: Customizable user profiles with cover photos and avatars
- **Social Feed**: Dynamic feed with posts, likes, and comments
- **Media Sharing**: Image upload and sharing capabilities
- **Real-time Updates**: Live notifications and activity tracking
- **Responsive Design**: Mobile-first design that works on all devices

## Tech Stack

### Frontend

- **React 17** - Modern UI framework
- **Redux** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling and animations

### Backend

- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Multer** - File upload handling
- **Bcrypt** - Password hashing

## Project Structure

```
sports-social/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context for state
│   │   ├── reducers/      # Redux reducers
│   │   └── actions/       # API actions
│   └── public/            # Static assets
├── server/                 # Node.js backend
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API endpoints
│   └── images/            # Uploaded images
└── README.md              # This file
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
DB_URL=mongodb://localhost:27017/sports-social
PORT=8800
JWT_SECRET=your_jwt_secret_here
```

Start the server:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
```

Start the React app:

```bash
npm start
```

The app will open at `http://localhost:3000` and proxy API calls to `http://localhost:8800/api`.

## API Endpoints

### Authentication

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/google` - Google OAuth

### Users

- `GET /api/users` - Get all users
- `GET /api/user/:id` - Get user by ID
- `PUT /api/user/:id` - Update user profile
- `DELETE /api/user/:id` - Delete user

### Posts

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `PUT /api/posts/:id/like` - Like/unlike post

### File Upload

- `POST /api/upload` - Upload images

## Usage

1. **Register/Login**: Create an account or sign in with Google
2. **Complete Profile**: Add profile picture, cover photo, and bio
3. **Share Content**: Create posts with text and images
4. **Connect**: Follow other users and engage with their content
5. **Explore**: Discover new posts and users in the feed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

**Luke Grech** - [GitHub](https://github.com/lukegrc)

## Acknowledgments

- React community for the amazing framework
- MongoDB for the flexible database
- Express.js team for the robust backend framework

## Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Star this repository if you found it helpful!**
