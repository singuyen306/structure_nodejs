//define alert section
var FormAlertElement = React.createClass({
    getInitialState: function(){
        return {
            display: 'none'
        }
    },
    render: function(){
        return (
            <div id="signupalert" style={this.state} className="alert alert-danger">
                <span></span>
            </div>
        );
    }
});

//define element form section
var SigninFormElement = React.createClass({
    render: function(){
        if(this.props.type == 'button'){
            return (
                <div className="form-group input-submit">
                    <div className="col-sm-12 controls">
                      <a id={this.props.id} href="#" className="btn btn-success">{this.props.name}</a>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="input-group">
                    <span className="input-group-addon"><i className={this.props.glyphicon}></i></span>
                    <input id={this.props.id} type={this.props.type} className="form-control" name={this.props.name} placeholder={this.props.placeholder} />
                </div>
            )
        }

    }
});

//define form section
var SigninForm = React.createClass({
    render: function(){
        return (
            <form id="loginform" className="form-horizontal" role="form">
                <FormAlertElement />
                <SigninFormElement id="email" type="email" name="email" glyphicon="glyphicon glyphicon-user" placeholder="Email" />
                <SigninFormElement id="password" type="password" name="password" glyphicon="glyphicon  glyphicon-lock" placeholder="Password" />
                <SigninFormElement id="btn-login" type="button" name="Login" />
            </form>
        );
    },
    componentDidMount: function(){
        // jquery syntax here
    }
});

//define panel body section
var PanelBody = React.createClass({
    render: function(){
        return (
            <div className="panel-body">
                <SigninForm />
            </div>
        );
    }
});

//define panel heading section
var PanelHeading = React.createClass({
    render: function(){
        var styles = {
            float:'right',
            fontSize: '85%',
            position: 'relative',
            top:'-10px'
        };
        return (
            <div className="panel-heading">
                <div className="panel-title">Sign In</div>
            </div>
        );
    }
});

//define panel info section
var PanelInfo = React.createClass({
    render: function(){
        return (
            <div className="panel panel-info">
                <PanelHeading />
                <PanelBody />
            </div>
        );
    }
});

//import to Dom
ReactDOM.render(
    <PanelInfo />,
    document.getElementById('loginbox')
);
