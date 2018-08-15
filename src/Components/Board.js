class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Array(12).fill(null),
    };
  }

  handleClick(i) {
    const cards = this.state.cards.slice();
    cards[i] = 'X';
    this.setState({cards: cards});
  }

  renderCard(i) {
    return (
      <Card
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
          {this.renderCard(3)}
        </div>
        <div className="board-row">
          {this.renderCard(4)}
          {this.renderCard(5)}
          {this.renderCard(6)}
          {this.renderCard(7)}
        </div>
        <div className="board-row">
          {this.renderCard(8)}
          {this.renderCard(9)}
          {this.renderCard(10)}
          {this.renderCard(11)}
        </div>
      </div>
    );
  }
}
