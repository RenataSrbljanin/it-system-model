import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './jsonfiletable.module.scss'

interface FileItem {
  name: string
  size: string
  date: string
  timestamp: number
}

export default function JsonFileTable() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate() 

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const now = new Date()
      const newFile: FileItem = {
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        date: now.toLocaleDateString('hr-HR'),
        timestamp: now.getTime()
      }
      setFiles((prev) => [...prev, newFile])
    }
  }

  const handleDownload = (type: 'original' | 'modified', file: FileItem) => {
    console.log(`Downloading ${type} version of ${file.name}`)
    setOpenDropdownIndex(null)
  }

  const handleEdit = () => {
    navigate('/viewer') // Preusmjeri na Graphical Model Viewer
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Upload JSON Files</h2>
        <button className={styles.addButton} onClick={handleAddClick}>+ ADD FILE</button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>File name</th>
            <th>File size</th>
            <th>Upload date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td className={styles.centered}>{file.name}</td>
              <td>{file.size}</td>
              <td>{file.date}</td>
              <td className={styles.actions}>
                <button onClick={handleEdit}>✏️</button>

                <div className={styles.dropdownWrapper}>
                  <button
                    onClick={() =>
                      setOpenDropdownIndex(openDropdownIndex === index ? null : index)
                    }
                  >
                    ⬇️
                  </button>

                  {openDropdownIndex === index && (
                    <div className={styles.dropdown}>
                      <button onClick={() => handleDownload('original', file)}>Download Original</button>
                      <button onClick={() => handleDownload('modified', file)}>Download Modified</button>
                    </div>
                  )}
                </div>

                <button onClick={() =>
                  setFiles((prev) => prev.filter((_, i) => i !== index))
                }>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>Total files: {files.length}</div>
    </div>
  )
}
