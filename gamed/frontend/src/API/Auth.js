// Auth.js - Updated

// LOGIN USER
export async function loginUser(email, password) {
  try {
    const response = await fetch('https://use-gamed.ddns.net/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// REGISTER USER
export async function registerUser(email, password, username) {
  try {
    const response = await fetch('https://use-gamed.ddns.net/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, username }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
// LOGOUT USER
export function logoutUser() {
  localStorage.removeItem("token"); // Replace "token" with your actual key if different
}


// VERIFY PASSCODE (placeholder - update when you have a real API)
export async function verifyPasscode(passcode) {
  try {
    const response = await fetch('https://reqres.in/api/verify-passcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passcode }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to verify passcode.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// RESEND VERIFICATION CODE (update URL with real backend if available)
export async function resendVerificationCode(email) {
  try {
    const response = await fetch("https://use-gamed.ddns.net/api/v1/auth/resend-verification-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to resend verification code.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// FORGOT PASSWORD (update URL if route is different)
export const sendForgotPasswordRequest = async (email) => {
  try {
    const response = await fetch('https://use-gamed.ddns.net/api/v1/auth/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Failed to send password reset email');
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error(error.message);
  }
};

