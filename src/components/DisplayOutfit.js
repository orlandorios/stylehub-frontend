export const DisplayOutfit = ({ outfit }) => {
    return (
        <>
            {outfit.closet_item.map((item) => (
                <div className={item.id}>{item.item_image ? <img src={item.item_image} alt='' width='100rem' /> : ''}</div>
            ))}
        </>
    )
}