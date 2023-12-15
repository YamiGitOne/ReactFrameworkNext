"use client";
import { useBearsStore } from "../../public/store/bears.store";
const IncreaseBear = () => {
    const increasePopulation = useBearsStore((state) => state.increasePopulation);
    return (
        <button
        onClick={increasePopulation}
        className="bg-gray-900 text-white px-4 py-2 rounded"
        >IncreaseBear</button>
    )
}
export default IncreaseBear;