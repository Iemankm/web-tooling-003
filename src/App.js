import React from "react";
import useSWR from "swr";

const catfacts = "https://catfact.ninja/facts";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(catfacts, fetchJSON);
  /*	const [selectedFact, setSelectedFact] = useState(null)
if (!data) return null
	const factslist = Object.keys(data?.data)
	return (
		<div>
			{selectedFact}
			<ul>
				{factslist.map(fact => (
					<li>
						<button onClick={() => setSelectedFact(fact)}>{fact}</button>
					</li>
				))}
			</ul>
		</div>
	)*/
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
