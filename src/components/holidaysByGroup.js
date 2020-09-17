import datesData from "../data/dates.json";

function BeliefGroup(props) {
  let [beliefsListHTML, setBeliefsListHTML] = useState([]);

  useEffect(() => {
    for (let key in holidayDates) {
      groups.push({
        belief: key,
        holidays: Object.keys(holidayDates[key]),
      });
    }

    setBeliefsListHTML(
      groups.map((belief, i) => <li key={i}>{belief["belief"]}</li>)
    );
  }, []);

  return (
    <div className="beliefGroup">
      <ul>{beliefsGroupList}</ul>
    </div>
  );
}

export default BeliefGroup;
