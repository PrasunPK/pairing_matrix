export const isSamePair = (existing, incoming) =>
    (existing.pair1 === incoming.pair1 && existing.pair2 === incoming.pair2)
    || (existing.pair2 === incoming.pair1 && existing.pair1 === incoming.pair2);