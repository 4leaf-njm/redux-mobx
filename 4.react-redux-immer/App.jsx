import React from "react";
import { connect } from "react-redux";
import { login, logout } from "./actions/user";

class App extends React.Component {
  loginHandler = () => {
    this.props.login({
      id: "4leaf.njm",
      password: "4leaf0309!!",
    });
  };

  logoutHandler = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        {user.isLogin ? (
          <div>
            {user.data.name}님
            <button onClick={this.logoutHandler}>로그아웃</button>
          </div>
        ) : (
          <>
            로그인해주세요.<button onClick={this.loginHandler}>로그인</button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  logout: (data) => dispatch(logout(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
