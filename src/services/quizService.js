const API_URL = "http://localhost:3000";

// Lấy danh sách các chủ đề
export const getTopics = async () => {
  try {
    const response = await fetch(`${API_URL}/topics`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch topics:", error);
    throw error;
  }
};

// Lấy các câu hỏi theo chủ đề
export const getQuestionsByTopic = async (topicId) => {
  try {
    const response = await fetch(`${API_URL}/questions?topicId=${topicId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch questions for topic ${topicId}:`, error);
    throw error;
  }
};

// Lưu kết quả bài làm
export const saveQuizResult = async (result) => {
  try {
    const response = await fetch(`${API_URL}/results`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to save quiz result:", error);
    throw error;
  }
};

// Lấy lịch sử kết quả của người dùng
export const getUserResults = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/results?userId=${userId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch results for user ${userId}:`, error);
    throw error;
  }
};

// Đăng ký tài khoản mới
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to register user:", error);
    throw error;
  }
};

// Đăng nhập
export const loginUser = async (credentials) => {
  try {
    // Trong thực tế, bạn nên sử dụng endpoint /login thay vì /users
    // Đây chỉ là mẫu đơn giản sử dụng json-server
    const response = await fetch(`${API_URL}/users?email=${credentials.email}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const users = await response.json();

    if (users.length > 0 && users[0].password === credentials.password) {
      // Trong ứng dụng thực tế, bạn nên sử dụng JWT token hoặc phương thức xác thực an toàn khác
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(users[0]));
      return users[0];
    } else {
      throw new Error('Invalid email or password');
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};