var React = require("react");

class BODY extends React.Component {
  render() {
    return (
      <body>
      		<main className={'container-fluid'}>
      			<div className={'row'}>
      				<div className={'col-2'}>
      				</div>
      				<div className={'col-8 main-display'}>
      					{this.props.children}
          			</div>
      				<div className={'col-2'}>
      				</div>
      			</div>
      		</main>
          <script src={"https://code.jquery.com/jquery-3.2.1.slim.min.js"} integrity={"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"} crossorigin={"anonymous"}></script>
          <script src={"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"} integrity={"sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"} crossorigin={"anonymous"}></script>
          <script src={"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"} integrity={"sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1"} crossorigin={"anonymous"}></script>
      	</body>
    );
  }
}

module.exports = BODY;
