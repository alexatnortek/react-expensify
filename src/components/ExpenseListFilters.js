import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import uuid from 'uuid';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState((() => ({ calendarFocused })))
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
    // console.log(e.target.value);
  };
  onSortChange = (e) => {
    e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate();
  };
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={this.onTextChange} />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange} >
          <option value='amount'>Amount</option>
          <option value='date'>Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          // startDateId={uuid()}
          startDateId={'startDate'}
          endDate={this.props.filters.endDate}
          // endDateId={uuid()}
          endDateId={'endDate'}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     filters: state.filters
//   }
// };

//same as above
const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);