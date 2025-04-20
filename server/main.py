from fastapi import FastAPI, APIRouter
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter(prefix="/api/analytics")


@router.get("/users", response_class = FileResponse)
def read_users():
    """
    Возвращает список пользователей и количество созданных ими документов за последние 7 дней.
    
    **Пример ответа:**
    ```json
    
    [
        {"user_id": 1, "name": "Vitaliy", "documents": 10},
        {"user_id": 2, "name": "Roman", "documents": 8},
        {"user_id": 3, "name": "Oksana", "documents": 12}
    ]
    
    ```
    """
    return "db/users.json"

@router.get("/documents", response_class = FileResponse)
def read_documents():
    """
    Возвращает количество документов созданных за последние 7 дней в сумме и по категориям.
    
    **Пример ответа:**
    ```json
    {
        "total": "30",
        "statuses": {
            "draft": "10",
            "on_signature": "5",
            "signed": "15"
        }
    }
    ```
    """
    return "db/documents.json"

@router.get("/processing-time", response_class = FileResponse)
def read_processing_time():
    """
    Возвращает среднее время обработки в часах за последние 7 дней.
    
    **Пример ответа:**
    ```json
    [
        {"date": "2025-03-28", "hours": 4.2},
        {"date": "2025-03-29", "hours": 3.8},
        {"date": "2025-03-30", "hours": 3.5},
        {"date": "2025-03-31", "hours": 3.9},
        {"date": "2025-04-01", "hours": 4.1},
        {"date": "2025-04-02", "hours": 3.7},
        {"date": "2025-04-03", "hours": 3.5}
    ]
    ```
    """
    return "db/process-time.json"

app = FastAPI()

origins = [
    "http://[2001:1bb0:e000:1e::3e]",
    "http://localhost:5173",
    "http://localhost",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
