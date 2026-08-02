import useCountUp from "../../hooks/useCountUp";
import { formatCurrency } from "../../utils/formatCurrency";

/**
 * AnimatedCurrency — renders a Rand value that smoothly counts up/down
 * to its new value whenever it changes, instead of jumping instantly.
 * Used for every real calculator result figure.
 */
export default function AnimatedCurrency({ value, className = "" }) {
  const animated = useCountUp(Number(value) || 0);
  return <span className={className}>{formatCurrency(animated)}</span>;
}
