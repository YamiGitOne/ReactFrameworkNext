"use client";
import { useBearsStore } from "../../public/store/bears.store";
const IncreaseBear = () => {
    const increasePopulation = useBearsStore((state) => state.increasePopulation);
    return (
        <button
        onClick={increasePopulation}
        className="bg-gray-900 text-white rounded"
        >IncreaseBear</button>
    )
}
export default IncreaseBear;