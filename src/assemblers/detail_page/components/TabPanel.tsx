// Navigation panel content
export default function Tabpanels(props: dataprops) {
  return (
    <div style={{ paddingTop: "0.5rem" }}>
      {props.data.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
    </div>
  );
}
