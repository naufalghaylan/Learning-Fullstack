type Props = {
    onCountChange: (cb) => void;
    mode: "subtract" | "add";
    count: number;
}

const CounterButton = ({onCountChange, count, mode}: Props) => (
    <button 
    onClick={() => onCountChange(mode === "add" ? count + 1 : count - 1)}
         
    >
    count is {count}
    </button>
)

export default CounterButton;