import RemoveButton from "./../RemoveButton";
import UpdateButton from "./../UpdateButton";
import styles from "./styles.module.css";

export default function ProductsList(){
    return (
        <div className={styles.list}>
          <div className={styles.item}>
            <div>
              <h3 className={styles.itemTitle}>Topic Title</h3>
              <p className={styles.itemDescription}> Topic Description</p>
            </div>
            <div>
                <RemoveButton></RemoveButton>
                <UpdateButton></UpdateButton>
            </div>  
          </div>
          <div className={styles.item}>
            <div>
              <h3 className={styles.itemTitle}>Topic Title</h3>
              <p className={styles.itemDescription}> Topic Description</p>
            </div>
            <div>
                <RemoveButton></RemoveButton>
                <UpdateButton></UpdateButton>
            </div>  
          </div>
          <div className={styles.item}>
            <div>
              <h3 className={styles.itemTitle}>Topic Title</h3>
              <p className={styles.itemDescription}> Topic Description</p>
            </div>
            <div>
                <RemoveButton></RemoveButton>
                <UpdateButton></UpdateButton>
            </div>  
          </div>
          <div className={styles.item}>
            <div>
              <h3 className={styles.itemTitle}>Topic Title</h3>
              <p className={styles.itemDescription}> Topic Description</p>
            </div>
            <div>
                <RemoveButton></RemoveButton>
                <UpdateButton></UpdateButton>
            </div>  
          </div>
        </div>
    )
}